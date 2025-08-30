import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
    voteType: (key: "good" | "neutral" | "bad") => void;
    resetVotes: () => void;
}

const VoteOptions = ({ voteType, resetVotes }: VoteOptionsProps) => {

    return <div className={css.container}>
        <button className={css.button} onClick={() => voteType("good")}>Good</button>
            <button className={css.button} onClick={() => voteType("neutral")}>Neutral</button>
            <button className={css.button} onClick={() => voteType("bad")}>Bad</button>
            <button className={`${css.button} ${css.reset}`} onClick={resetVotes}>Reset</button>
    </div>
}

export default VoteOptions;