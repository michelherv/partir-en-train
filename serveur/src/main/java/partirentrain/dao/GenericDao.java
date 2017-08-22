package partirentrain.dao;

import java.util.List;

import partirentrain.dto.FilterDto;

public interface GenericDao<T> {
	List<T> getAll();

	List<T> getBy(List<FilterDto> queryFilter);
}
