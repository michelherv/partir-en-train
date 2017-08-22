package partirentrain.dao.xls;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

public abstract class AstractDao<T> {
	private List<T> items = new ArrayList<>();;

	public AstractDao() {
	}
	
	@PostConstruct
	public void init() {
		// load data from xlsx file at startup
		try {
			// Get xls file as stream
			ClassLoader classloader = Thread.currentThread().getContextClassLoader();
			InputStream inputStream = classloader.getResourceAsStream("xls/" + this.getFilename());

			// Get the workbook instance for XLS file
			Workbook workbook = WorkbookFactory.create(inputStream);

			// Get first sheet from the workbook
			Sheet sheet = workbook.getSheetAt(0);

			// Iterate through each rows
			Iterator<Row> rowIterator = sheet.iterator();
			rowIterator.next(); // remove columns heading first
			while (rowIterator.hasNext()) {
				// add each row in collection
				this.items.add(this.getInstance(rowIterator.next()));
			}

			inputStream.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (EncryptedDocumentException e) {
			e.printStackTrace();
		} catch (InvalidFormatException e) {
			e.printStackTrace();
		}
	}

	protected abstract String getFilename();

	protected abstract T getInstance(Row row);

	public List<T> getAll() {
		return this.items;
	}
}
