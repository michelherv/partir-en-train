package partirentrain.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import partirentrain.dao.GenericDao;
import partirentrain.dto.TarifDto;

@RestController
public class TarifController {

	@Autowired
	GenericDao<TarifDto> tarifDao;

	@GetMapping("/tarifs")
	public List<TarifDto> getBy(
		@RequestParam(value = "origine", required = false) final String origine,
		@RequestParam(value = "destination", required = false) final String destination,
		@RequestParam(value = "min", required = false) final Double min,
		@RequestParam(value = "max", required = false) final Double max
	) {
		return this.tarifDao.getAll().stream()
				.filter(item -> StringUtils.isEmpty(origine) || item.isOrigine(origine))
				.filter(item -> StringUtils.isEmpty(destination) || item.getDestination().equals(destination))
				.filter(item -> {
					boolean result = max == null;
					result = result || ((0 < item.getAppelClasse2()) && (item.getAppelClasse2() <= max));
					result = result || ((0 < item.getClasse2()) && (item.getClasse2() <= max));
					result = result || ((0 < item.getClasse1()) && (item.getClasse1() <= max));
					return result;
				})				
				.filter(item -> {
					boolean result = min != null;
					result = result && (min < item.getAppelClasse2());
					result = result && (min < item.getClasse2());
					result = result && (min < item.getClasse1());
					return (min == null) || result;
				})
				.sorted((itemA, itemB) -> itemA.getDestination().compareTo(itemB.getDestination()))
				.collect(Collectors.toList());
	}
}
