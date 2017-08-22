package partirentrain.dto;

import java.text.Normalizer;
import java.util.function.Function;

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
public class TarifDto {
	private String origine;
	private String destination;
	private double appelClasse2;
	private double classe2;
	private double classe1;
	private String commentaire;
	
	public boolean isOrigine(String origine) {
		Function<String, String> normalize = myStr -> {
			myStr = Normalizer.normalize(myStr, Normalizer.Form.NFD);
			myStr = myStr.replaceAll("[\\p{InCombiningDiacriticalMarks}]", "");
			myStr = myStr.replaceAll("-", "");
			myStr = myStr.replaceAll(" ", "");
			myStr = myStr.toLowerCase();
			return myStr;
		};

		return normalize.apply(this.origine).equals(normalize.apply(origine));
	}
}
