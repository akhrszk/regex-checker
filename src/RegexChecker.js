// src/RegexChecker.js
import React, { useState } from "react";
import ResultDisplay from "./ResultDisplay";
import "./RegexChecker.css";

const RegexChecker = () => {
  const [regex, setRegex] = useState("");
  const [testString, setTestString] = useState("");

  return (
    <div className="container">
      <h1>正規表現チェッカー</h1>
      <div className="input-group">
        <label htmlFor="regex-input">正規表現</label>
        <input
          id="regex-input"
          type="text"
          placeholder="正規表現を入力してください"
          value={regex}
          onChange={(e) => setRegex(e.target.value)}
        />
      </div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="test-string-input">テスト文字列</label>
          <textarea
            id="test-string-input"
            className="test-string-input"
            rows={12}
            placeholder="正規表現に対してテストする文字列を入力してください"
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
          ></textarea>
        </div>
        <ResultDisplay regex={regex} testString={testString} />
      </div>
    </div>
  );
};

export default RegexChecker;
