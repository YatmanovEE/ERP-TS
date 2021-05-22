export interface createObj {
	address: string;
	name: string;
	description: string;
}

export type personItem = {
	photo: URL;
	post: string;
	fullName: {
		firstName: string;
		lastName: string;
		surName: string;
	};
	comment: string;
};

export type contractorItem = {
	from: string;
	commentName: string;
	persons: personItem[];
};

export type link = {
	href: URL;
	title: string;
};

export type news = link;
export type photo = link;

export type objectItem = {
	name: string;
	generalInformation: {
		description: string;
		newsLink: news[];
		photo: photo[];
	};
	location: {
		address: string;
	};
	contractors: contractorItem[];
};

export enum eventTypeCreated {
	creatingComment = 'creatingComment',
	creatingObj = 'creatingObj',
	incomingCall = 'incomingCall',
	outGoingCall = 'outGoingCall',
}

export interface eventItem {
	payload: Object | null;
	type: eventTypeCreated;
}
export interface creatingObj extends eventItem {
	payload: null;
	type: eventTypeCreated.creatingObj;
}
export interface creatingComment extends eventItem {
	payload: {
		comment: string;
	};
	type: eventTypeCreated.creatingComment;
}

export interface callEvent extends eventItem {
	payload: {
		audio: Blob;
		associated: personItem;
	};
	type: eventTypeCreated.incomingCall | eventTypeCreated.outGoingCall;
}

export interface eventItemCreated extends eventItem {
	payload: {
		dateNow: Date;
		createdBy: personItem;
	};
	type: eventTypeCreated;
}

export type worksInObj = {
	events: eventItemCreated[];
};
