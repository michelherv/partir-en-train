package partirentrain.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import partirentrain.dao.GenericDao;
import partirentrain.dto.CommuneDto;
import partirentrain.dto.GareDto;

@RestController
public class CommuneController {

	@Autowired
	GenericDao<GareDto> gareDao;

	@GetMapping("/communes")
	public List<CommuneDto> getBy(
		@RequestParam(value = "departement") final String departement
	) {
		return this.gareDao.getAll().stream()
				.filter(item -> item.getDepartement().equals(departement))
				.map(GareDto::getCommune)
				.distinct()
				.sorted()
				.map(item -> new CommuneDto(item))
				.collect(Collectors.toList());
	}
}
