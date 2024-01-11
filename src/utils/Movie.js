export class Movie {
    constructor(data) {
      this._data = data
    }
  
    get id() {
      return this._data.id
    }
  
    get description() {
      return this._data.description
    }
  
    get director() {
      return this._data.director
    }
  
    get image() {
      return this._data.image
    }

    get banner() {
        return this._data.movie_banner
    }

    get originalTitle() {
        return this._data.original_title
    }

    get producer() {
        return this._data.producer
    }

    get score() {
        return this._data.rt_score
    }

    get duration() {
        return this._data.running_time
    }

    get year() {
        return this._data.release_date
    }

    get title() {
        return this._data.title
    }
}