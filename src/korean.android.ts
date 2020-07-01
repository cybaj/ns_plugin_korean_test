import { Common } from './korean.common';

declare let com: any, java: any;

export class Korean extends Common {
    public text: java.lang.CharSequence;
    public normalized: string;
    
    constructor() {
        super();
        this.text = "한국어를 처리하는 예시입니닼ㅋㅋㅋㅋㅋ #한국어";
    }

    public normalize() {
        this.normalized = com.twitter.penguin.korean.TwitterKoreanProcessor.normalize(this.text).toString()
        return this.normalized;
    }
}
