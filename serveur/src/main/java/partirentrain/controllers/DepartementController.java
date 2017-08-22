package partirentrain.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import partirentrain.dao.GenericDao;
import partirentrain.dto.DepartementDto;
import partirentrain.dto.GareDto;

@RestController
public class DepartementController {

	@Autowired
	GenericDao<GareDto> gareDao;

	@GetMapping("/departements")
	public List<DepartementDto> getAll() {
		return this.gareDao.getAll().stream()
				.map(GareDto::getDepartement)
				.distinct()
				.sorted()
				.map(item -> new DepartementDto(item))
				.collect(Collectors.toList());
	}
}
