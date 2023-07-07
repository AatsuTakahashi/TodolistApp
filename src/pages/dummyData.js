import { v4 as uuidv4 } from "uuid";

const dummyData = [{
    id: uuidv4(),
    title: "To Do",
    tasks: [
        {
            id: uuidv4(),
            title: "Reactの勉強",
        },
        {
            id: uuidv4(),
            title: "YouTubeで勉強",
        },
        {
            id: uuidv4(),
            title: "散歩",
        },
    ],
},{
    id: uuidv4(),
    title: "実行中",
    tasks: [
        {
            id: uuidv4(),
            title: "Reactの勉強",
        },
        {
            id: uuidv4(),
            title: "YouTubeで勉強",
        },
        {
            id: uuidv4(),
            title: "散歩",
        },
    ],
},{
    id: uuidv4(),
    title: "完了したもの",
    tasks: [
        {
            id: uuidv4(),
            title: "Reactの勉強",
        },
        {
            id: uuidv4(),
            title: "YouTubeで勉強",
        },
        {
            id: uuidv4(),
            title: "散歩",
        },
    ],
},
];

export default dummyData;