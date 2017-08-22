package partirentrain.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import partirentrain.dao.GenericDao;
import partirentrain.dto.GareDto;
import partirentrain.dto.TarifDto;

@RestController
public class TrajetController {

	@Autowired
	GenericDao<TarifDto> tarifDao;

	@GetMapping("/trajets")
	public List<GareDto> getBy(
		@RequestParam(value = "origine", required = false) final String origine
	) {
		return this.tarifDao.getAll().stream()
				.filter(item -> StringUtils.isEmpty(origine) || item.isOrigine(origine))
				.map(item -> StringUtils.isEmpty(origine) ? item.getOrigine() : item.getDestination())
				.distinct()
				.filter(item -> !StringUtils.isEmpty(item))
				.sorted((itemA, itemB) -> itemA.compareTo(itemB))
				.map(item -> new GareDto(item))
				.collect(Collectors.toList());
	}
}
