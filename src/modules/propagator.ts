import axios from "axios"
import { generateSlug } from "random-word-slugs";
import { Propagatable } from "./propagatable";

export class GenericPropagator {
    BASE_URL: string

    constructor(api: string,) {
        this.BASE_URL = api;
    }

    async propagate(endpoint: string, schema: Propagatable, amount: number) {
        console.log("[DEBUG] Posting to endpoint: ",endpoint)
        for (let index = 0; index < amount; index++) {    
            var obj : { [key:string]:string; } = {};

            schema.keys.forEach((element) => {
                var v = ""
                if(element.IsRandom()) {
                    v = generateSlug()
                } else {
                    v = element.value
                }
                obj[element.key] = v
            })
            try {
                await axios.post(this.BASE_URL+endpoint,obj)
                console.log("[DEBUG] Propagated item:",index)
              } catch (err) {
                throw new Error('[ERROR] Unable to propagate item, maybe you missed the structue?  ::'+err)
            }
        }
    }
}