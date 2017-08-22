package partirentrain.dao.xls.builders;

import java.util.List;

import org.apache.poi.ss.usermodel.Row;

import lombok.Getter;
import lombok.Setter;
import partirentrain.dto.GareDto;
import partirentrain.dto.TarifDto;

@Getter
@Setter
public class TarifBuilder {
	private TarifDto tarif;
	private Row row;

	protected TarifBuilder(Row row) {
		this.tarif = new TarifDto();
		this.row = row;
	}

	public static TarifDto build(Row row, List<GareDto> gares) {
		return new TarifBuilder(row)
				.setOD(gares)
				.setAppelClasse2()
				.setClasse2()
				.setClasse1()
				.setCommentaire()
				.getTarif();
	}

	protected TarifBuilder setOD(List<GareDto> gares) {
		try {
			String[] tmp = this.getRow().getCell(0).getStringCellValue().split(" - ");
			if(tmp.length < 2) {
				tmp = this.getRow().getCell(0).getStringCellValue().split("-");
			}
			this.getTarif().setOrigine(tmp[0].trim());
			this.getTarif().setDestination(tmp[1].trim());
		} catch (NullPointerException e) {
			this.getTarif().setOrigine(null);
			this.getTarif().setDestination(null);
		}
		return this;
	}

	protected TarifBuilder setAppelClasse2() {
		try {
			this.getTarif().setAppelClasse2(this.getRow().getCell(1).getNumericCellValue());
		} catch (NullPointerException e) {
		}
		return this;
	}

	protected TarifBuilder setClasse2() {
		try {
			this.getTarif().setClasse2(this.getRow().getCell(2).getNumericCellValue());
		} catch (NullPointerException e) {
		}
		return this;
	}

	protected TarifBuilder setClasse1() {
		try {
			this.getTarif().setClasse1(this.getRow().getCell(3).getNumericCellValue());
		} catch (NullPointerException e) {
		}
		return this;
	}

	protected TarifBuilder setCommentaire() {
		try {
			this.getTarif().setCommentaire(this.getRow().getCell(4).getStringCellValue());
		} catch (NullPointerException e) {
			this.getTarif().setCommentaire("");
		}
		return this;
	}
}
