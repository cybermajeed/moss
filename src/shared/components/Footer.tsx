import React from "react";
import manifest from "../../../public/manifest.json";

const Footer: React.FC = () => (
    < footer className="text-moss-500 align-bottom text-[15px] text-center tracking-widest" >
        MOSS {manifest.version}
    </footer >
)

export default Footer