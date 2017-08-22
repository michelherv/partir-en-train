package partirentrain.dto;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class GareDto {
	private Integer codeUic;
	private String libelle;
	private Boolean fret;
	private Boolean voyageurs;
	private String codeLigne;
	private Integer rang;
	private String pk;
	private PointDto lambert93;
	private PointDto wgs84;
	private String commune;
	private String departement;
	private PointDto coordonneesGeographiques;
	
	public GareDto(String libelle) {
		this(null, libelle, null, null, null, null, null, null, null, null, null, null);
	}
}
