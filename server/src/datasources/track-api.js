import { RESTDataSource } from "@apollo/datasource-rest";

class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  async getTracksForHome() {
    return this.get("tracks");
  }

  async getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
}

export default TrackAPI;
