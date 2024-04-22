import React, { ReactElement } from "react";

export interface ContentItem extends ReactElement {
  component: React.ComponentType<any>;
  props: { [key: string]: any };
  label: string;
  style?: { [key: string]: any };
}
interface CardProps {
  title: string;
  content: ContentItem[];
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card-container">
      <div className="card ">
        <h3> {title}</h3>
        {content.map((item) => (
          <item.component key={item.key} style={item.style} {...item.props}>
            {item.label}
          </item.component>
        ))}
      </div>
      <div className="card">
        {content.map((item) => (
          <item.component
            key={item.key}
            style={item.style}
            {...item.props}
            $shape="round-sm"
          >
            {item.label}
          </item.component>
        ))}
      </div>
      <div className="card">
        {content.map((item) => (
          <item.component
            key={item.key}
            style={item.style}
            {...item.props}
            $shape="round"
          >
            {item.label}
          </item.component>
        ))}
      </div>
      <div className="card">
        {content.map((item) => (
          <item.component
            key={item.key}
            style={item.style}
            {...item.props}
            $shape="pill"
          >
            {item.label}
          </item.component>
        ))}
      </div>
    </div>
  );
};

export default Card;
