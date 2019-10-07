import { RESTDataSource } from "apollo-datasource-rest";

export default class CurrencyConverterDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL =
      "http://www.apilayer.net/api/live?access_key=0c8c9795c7dc626c2a9a2284aa38a11e&format=1";
  }
}
