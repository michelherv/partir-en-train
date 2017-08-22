package partirentrain.dao.xls;

import java.util.List;

import org.apache.poi.ss.usermodel.Row;
import org.springframework.stereotype.Repository;

import partirentrain.dao.GenericDao;
import partirentrain.dao.xls.builders.GareBuilder;
import partirentrain.dto.FilterDto;
import partirentrain.dto.GareDto;

@Repository
public class GareDaoImpl extends AstractDao<GareDto> implements GenericDao<GareDto> {

	@Override
	protected String getFilename() {
		return "Gares.xlsx";
	}

	@Override
	protected GareDto getInstance(Row row) {
		return GareBuilder.build(row);
	}

	public List<GareDto> getBy(List<FilterDto> queryFilter) {
		return this.getAll();
	}
}
