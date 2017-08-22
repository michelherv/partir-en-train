package partirentrain.dao.xls;

import java.util.List;

import org.apache.poi.ss.usermodel.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import partirentrain.dao.GenericDao;
import partirentrain.dao.xls.builders.TarifBuilder;
import partirentrain.dto.FilterDto;
import partirentrain.dto.GareDto;
import partirentrain.dto.TarifDto;

@Repository
public class TarifDaoImpl extends AstractDao<TarifDto> implements GenericDao<TarifDto> {

	@Autowired
	GenericDao<GareDto> gareDao;
	
	@Override
	protected String getFilename() {
		return "TGV tarifs.xlsx";
	}

	@Override
	protected TarifDto getInstance(Row row) {
		return TarifBuilder.build(row, this.gareDao.getAll());
	}

	public List<TarifDto> getBy(List<FilterDto> queryFilter) {
		return this.getAll();
	}
}
