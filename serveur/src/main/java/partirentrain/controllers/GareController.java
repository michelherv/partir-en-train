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

@RestController
public class GareController {

	@Autowired
	GenericDao<GareDto> gareDao;

	@GetMapping("/gares")
	public List<GareDto> getBy(
		@RequestParam(value = "departement") final String departement,
		@RequestParam(value = "commune", required = false) final String commune
	) {
		return this.gareDao.getAll().stream()
				.filter(item -> item.getDepartement().equals(departement))
				.filter(item -> StringUtils.isEmpty(commune) || item.getCommune().equals(commune))
				.sorted((itemA, itemB) -> itemA.getLibelle().compareTo(itemB.getLibelle()))
				.collect(Collectors.toList());
	}
}
