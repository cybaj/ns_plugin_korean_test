import { Common } from './korean.common';

export class Korean extends Common {
    public text: string;
    public normalized: string;
    
    constructor() {
        super();
        this.text = "한국어를 처리하는 예시입니닼ㅋㅋㅋㅋㅋ #한국어";
    }

    public normalize() {
        const dd = com.twitter.penguin.korean.TwitterKoreanProcessor.normalize(this.text);
        this.normalized = dd.toString();
        return this.normalized;
    }
}
