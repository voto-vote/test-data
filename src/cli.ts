#!/usr/bin/env node
import { PropagatableItem } from "./modules/propagatable";
import { GenericPropagator } from "./modules/propagator";

// Add elections
var p = new GenericPropagator("http://127.0.0.1:3000/")

run()

async function run() {


    // Add elections
    console.log("[INFO] Add elections")
    await p.propagate("/elections",{
        keys: [
            new PropagatableItem(false,"election_date","2022-12-12"),
            new PropagatableItem(true,"location"),
            new PropagatableItem(true,"name")
        ]
    },2)

    // Add clusters
    console.log("[INFO] Add clusters")
    await p.propagate("/clusters",{
        keys: [
            new PropagatableItem(true,"title"),
            new PropagatableItem(true,"subtitle"),
            new PropagatableItem(true,"description"),
            new PropagatableItem(true,"url")
        ]
    },2)
    
    console.log("[INFO] Add Applications")
    await p.propagate("/applications",{
        keys: [
            new PropagatableItem(false,"election_id",2),
            new PropagatableItem(false,"cluster_id",1),
            new PropagatableItem(false,"theme_id",1),
            new PropagatableItem(true,"title"),
            new PropagatableItem(true,"subtitle"),
            new PropagatableItem(true,"description"),
            new PropagatableItem(true,"website"),
            new PropagatableItem(true,"url"),
            new PropagatableItem(false,"launch_date","2022-04-01"),
            new PropagatableItem(false,"sundown_date","2022-04-01"),
            new PropagatableItem(true,"configuration"),
        ]
    },50)

}

