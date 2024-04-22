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

  const updateVariant =
    (variant: string) => (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      let newState = [...contentItem];
      newState.map((item) => (item.props.$variant = variant));
      setContent(newState);
    };

  useEffect(() => {}, [contentItem]);

  return (
    <div className="button-shape-container">
      <Card title={title} content={content} />
      <div className="card card-container ten-item-grid">
        {colors.map((item) => (
          <Button
            className="grid-item "
            key={item}
            // @ts-ignore comment
            $variant={item}
            $size="xs"
            onClick={updateVariant(item)}
          >
            {}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonCard;
