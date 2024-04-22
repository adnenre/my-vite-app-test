import React, { useEffect, useState } from "react";
import Card, { ContentItem } from "./Card";
import { Button } from "react-novice-button";
import base from "../theme";

interface ButtonCardProps {
  title: string;
  contentItem: ContentItem[];
}
// Define the YourReactComponent
const ButtonCard: React.FC<ButtonCardProps> = ({ title, contentItem }) => {
  return <Card title={title} content={contentItem} />;
};

const colors: string[] = Object.keys(base.colors);
export const ButtonShape: React.FC<ButtonCardProps> = ({
  title,
  contentItem,
}) => {
  const [content, setContent] = useState<ContentItem[]>(contentItem);
  const [selected, setSelected] = useState<number>();
  const updateVariant =
    (variant: string, index: number) => (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      let newState = [...contentItem];
      newState.map((item) => (item.props.$variant = variant));
      setContent(newState);
      setSelected(index);
    };

  useEffect(() => {}, [contentItem]);

  return (
    <div className="button-shape-container">
      <Card title={title} content={content} />
      <div className="card card-container ten-item-grid">
        {colors.map((item, index) => (
          <Button
            className={`grid-item ${
              selected === index ? "grid-item-selected" : ""
            }`}
            key={item}
            // @ts-ignore comment
            $variant={item}
            $size="xs"
            onClick={updateVariant(item, index)}
          >
            <svg
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonCard;
