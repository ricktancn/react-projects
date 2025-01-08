import React, { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "darkblue",
  className = "",
  expanded = false,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function handleToggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  const buttonStyle = {
    color: buttonColor,
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    font: "inherit",
    marginLeft: "6px",
  };

  // Split the children into words
  const words = children.split(" ");
  const displayText = !isExpanded
    ? words.slice(0, collapsedNumWords).join(" ") +
      (words.length > collapsedNumWords ? "..." : "")
    : children;

  return (
    <div className={className}>
      <span> {displayText} </span>
      <button style={buttonStyle} onClick={handleToggleExpanded}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
