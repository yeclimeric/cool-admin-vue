import { Socket } from 'socket.io-client';

export namespace Chat {
	enum ContentType {
		'text' = 0,
		'image' = 1,
		'video' = 2
	}

	interface Message {
		fromId?: string;
		toId?: string;
		content: {
			text?: string;
			imageUrl?: string;
			[key: string]: any;
		};
		contentType: ContentType;
		[key: string]: any;
	}

	interface Session {
		id: string;
		avatar: string;
		nickName: string;
		[key: string]: any;
	}

	interface Provide {
		socket?: Socket;
		send(message: Message, isAppend?: boolean): void;
		append(message: Message): void;
		expand(shouldExpand?: boolean): void;
		scrollToBottom(): void;
	}
}
