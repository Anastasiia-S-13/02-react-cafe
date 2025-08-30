import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css"
import { useState } from 'react';

export interface Votes {
    good: number,
    neutral: number,
    bad: number
}

const App = () => {
    const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
    
    const VoteType = (key: keyof Votes) => {
        setVotes((votes) => ({
            ...votes,
            [key]: votes[key] + 1,
        }));
    };

    const resetVotes = () => {
        setVotes({ good: 0, neutral: 0, bad: 0 });
    };

    const handleVote = (votes: Votes) => {
        const totalVotes = votes.good + votes.neutral + votes.bad;
        const positiveRate = totalVotes
            ? Math.round((votes.good / totalVotes) * 100)
            : 0;

        return { totalVotes, positiveRate };
    };

    const { totalVotes, positiveRate } = handleVote(votes);

    return <div className={css.app}>
        <CafeInfo />
        <VoteOptions voteType={VoteType} resetVotes={resetVotes} />
        {totalVotes !== 0
            ? (< VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />)
            : (<Notification />)}
    </div>;
}

export default App