// src/ResultDisplay.js
import React, { useMemo } from "react";
import "./ResultDisplay.css";

const ResultDisplay = ({ regex, testString }) => {
  const splitString = useMemo(() => {
    try {
      const re = new RegExp(regex, "g");
      const matchArray = [...testString.matchAll(re)];

      if (matchArray.length === 0) {
        return [testString];
      }

      const result = matchArray.reduce((accumulator, match, index) => {
        const prevIndex =
          index === 0
            ? 0
            : matchArray[index - 1].index + matchArray[index - 1][0].length;
        const beforeMatch = testString.slice(prevIndex, match.index);
        return [...accumulator, beforeMatch, match[0]];
      }, []);

      const lastIndex =
        matchArray[matchArray.length - 1].index +
        matchArray[matchArray.length - 1][0].length;
      return [...result, testString.slice(lastIndex)];
    } catch (error) {
      // 無効な正規表現が入力された場合、アラートを表示せずに無視します
      return [testString];
    }
  }, [regex, testString]);

  const renderHighlightedString = () => {
    return splitString.map((str, index) => {
      const formattedStr = str.split("\n").map((line, i) => {
        return (
          <React.Fragment key={i}>
            {line}
            {i < str.split("\n").length - 1 && <br />}
          </React.Fragment>
        );
      });

      if (index % 2 === 1) {
        return <mark key={index}>{formattedStr}</mark>;
      } else {
        return formattedStr;
      }
    });
  };

  return (
    <div className="input-group matches-display">
      <label>結果</label>
      <div className="matches">{renderHighlightedString()}</div>
    </div>
  );
};

export default ResultDisplay;
