package partirentrain.dao.xls.builders;

import org.apache.poi.ss.usermodel.Row;

import lombok.Getter;
import lombok.Setter;
import partirentrain.dto.GareDto;
import partirentrain.dto.PointDto;

@Getter
@Setter
public class GareBuilder {
	private GareDto gare;
	private Row row;

	protected GareBuilder(Row row) {
		this.gare = new GareDto();
		this.row = row;
	}

	public static GareDto build(Row row) {
		return new GareBuilder(row)
				.setCodeUic()
				.setLibelle()
				.setFret()
				.setVoyageurs()
				.setCodeLigne()
				.setRang()
				.setPk()
				.setLambert93()
				.setWgs84()
				.setCommune()
				.setDepartement()
				.setCoordonneesGeographiques()
				.getGare();
	}

	protected GareBuilder setCodeUic() {
		try {
			this.getGare().setCodeUic((int) this.getRow().getCell(0).getNumericCellValue());
		} catch (NullPointerException e) {
		}
		return this;
	}

	protected GareBuilder setLibelle() {
		try {
			this.getGare().setLibelle(this.getRow().getCell(1).getStringCellValue().trim());
		} catch (NullPointerException e) {
			this.getGare().setLibelle("");
		}
		return this;
	}

	protected GareBuilder setFret() {
		try {
			this.getGare().setFret(this.getRow().getCell(2).getStringCellValue().equalsIgnoreCase("O"));
		} catch (NullPointerException e) {
		}
		return this;
	}

	protected GareBuilder setVoyageurs() {
		try {
			this.getGare().setVoyageurs(this.getRow().getCell(3).getStringCellValue().equalsIgnoreCase("O"));
		} catch (NullPointerException e) {
		}
		return this;
	}

	protected GareBuilder setCodeLigne() {
		try {
			this.getGare().setCodeLigne(this.getRow().getCell(4).getStringCellValue());
		} catch (NullPointerException e) {
			this.getGare().setCodeLigne("");
		}
		return this;
	}

	protected GareBuilder setRang() {
		try {
			this.getGare().setRang((int) this.getRow().getCell(5).getNumericCellValue());
		} catch (NullPointerException e) {
		}
		return this;
	}

	protected GareBuilder setPk() {
		try {
			this.getGare().setPk(this.getRow().getCell(6).getStringCellValue());
		} catch (NullPointerException e) {
			this.getGare().setPk("");
		}
		return this;
	}

	protected GareBuilder setLambert93() {
		PointDto point = new PointDto();

		try {
			point.setX(this.getRow().getCell(7).getNumericCellValue());
		} catch (NullPointerException e) {
			point = null;
		}

		try {
			point.setY(this.getRow().getCell(8).getNumericCellValue());
		} catch (NullPointerException e) {
			point = null;
		}

		this.getGare().setLambert93(point);
		return this;
	}

	protected GareBuilder setWgs84() {
		PointDto point = new PointDto();

		try {
			point.setX(this.getRow().getCell(9).getNumericCellValue());
		} catch (NullPointerException e) {
			point = null;
		}

		try {
			point.setY(this.getRow().getCell(10).getNumericCellValue());
		} catch (NullPointerException e) {
			point = null;
		}

		this.getGare().setWgs84(point);
		return this;
	}

	protected GareBuilder setCommune() {
		try {
			this.getGare().setCommune(this.getRow().getCell(11).getStringCellValue());
		} catch (NullPointerException e) {
			this.getGare().setCommune("");
		}
		return this;
	}

	protected GareBuilder setDepartement() {
		try {
			this.getGare().setDepartement(this.getRow().getCell(12).getStringCellValue());
		} catch (NullPointerException e) {
			this.getGare().setDepartement("");
		}
		return this;
	}

	protected GareBuilder setCoordonneesGeographiques() {
		PointDto point = new PointDto();
		String[] tmp = null;
		try {
			tmp = this.getRow().getCell(13).getStringCellValue().split(",");
		} catch (NullPointerException e) {
			point = null;
		}

		try {
			point.setX(Double.parseDouble(tmp[1]));
		} catch (NullPointerException e) {
			point = null;
		}

		try {
			point.setY(Double.parseDouble(tmp[0]));
		} catch (NullPointerException e) {
			point = null;
		}

		this.getGare().setCoordonneesGeographiques(point);
		return this;
	}
}
