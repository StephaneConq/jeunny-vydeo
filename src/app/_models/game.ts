export interface Game {
  "slug": string;
  "name": string,
  "playtime": number,
  "platforms": {
    "platform": {
      "id": number,
      "name": string,
      "slug": string
    }
  }[],
  "stores": {
    "store": {
      "id": number,
      "name": string,
      "slug": string
    }
  }[],
  "released": string,
  "tba": boolean,
  "background_image": string,
  "background_image_additional": string,
  "rating": number,
  "rating_top": number,
  "ratings": any[],
  "ratings_count": number,
  "reviews_text_count": number,
  "added": number,
  "added_by_status": any,
  "metacritic": any,
  "suggestions_count": number,
  "id": number,
  "score": string,
  "clip": any,
  "tags": {
    "id": number,
    "name": string,
    "slug": string,
    "language": string,
    "games_count": number,
    "image_background": string
  }[],
  "user_game": any,
  "reviews_count": number,
  "community_rating": number,
  "saturated_color": string,
  "dominant_color": string,
  "short_screenshots": {
    "id": number,
    "image": string
  }[],
  "parent_platforms": {
    "platform": {
      "id": number,
      "name": string,
      "slug": string
    }
  }[],
  "genres": {
    "id": number,
    "name": string,
    "slug": string
  }[];
  "description": string;
  "description_raw": string;
}
