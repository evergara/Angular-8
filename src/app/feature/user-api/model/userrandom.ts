export interface UserRandom {
   gender: string;
   name: Name
   city: string;
   county: string;
   login: Login;
   picture: Picture;
}

export interface Login {
    username: string;
	password: string;
}

export interface Picture {
    large: string;
    medium: string
    thumbnail: string;
}

export interface Name {
    title: string;
    first: string
    last: string;
}
