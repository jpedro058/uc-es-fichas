/*
 * From many places on the Internet...
 */

package es.server;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.MediaType;

@Path("/persons")
public class PersonsKeeper {
	private static final String dirname = "files";

	@Path("list")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Person> getAllPersons() {
		List<Person> listpersons = new ArrayList<>();
		File file = new File("ages.txt");
		BufferedReader reader = null;

		try {
			reader = new BufferedReader(new FileReader(file));
			String text = null;

			while ((text = reader.readLine()) != null) {
				String array[] = text.split(",");
				String name = array[0].trim();
				int age = Integer.parseInt(array[1].trim());
				Person p  = new Person(name, age);
				listpersons.add(p);
			}
			reader.close();
		} catch (NumberFormatException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return listpersons;
	}

	@Path("files/{filename}")
	@GET
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public Response getFile(@PathParam("filename") String filename) {
		File file = new File(dirname + "/" + filename);
		return Response.ok(file, MediaType.APPLICATION_OCTET_STREAM)
				.header("Content-Disposition", "attachment; filename=\"" + file.getName() + "\"" ) //optional
				.build();
	}

}

