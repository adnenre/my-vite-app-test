import React, { useEffect, useState } from "react";
import Card, { ContentItem } from "./Card";
import { Button } from "react-novice-button";
import base from "../theme";
import { IconCheck } from "@tabler/icons-react";

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
      <Card title={title} content={content} shape />
      <div className="card card-container ten-item-grid">
        {colors.map((item, index) => (
          <Button
            className="grid-item"
            key={item}
            // @ts-ignore comment
            $variant={item}
            $size="xs"
            onClick={updateVariant(item, index)}
          >
            {selected === index ? <IconCheck height={18} width={18} /> : ""}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonCard;
