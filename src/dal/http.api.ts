import nationalityInstance from './nationallity.instance';
import {NationalityResponse} from "../models/Nationality.response";

export class HttpApi {

	static async getAllNationality(): Promise<NationalityResponse> {

		return await nationalityInstance.get<NationalityResponse>('all?fields=demonyms')
			.then(response => response.data);

	}
}