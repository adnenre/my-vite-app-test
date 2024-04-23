import React from "react";

export interface ContentItem extends React.ReactElement {
  component: React.ComponentType<any>;
  props: { [key: string]: any };
  label: string;
  style?: { [key: string]: any };
  icon?: React.ReactElement;
}
interface CardProps {
  title: string;
  content: ContentItem[];
  shape?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, shape }) => {
  if (shape) {
    return (
      <div className="card-container">
        <div className="card ">
          <h3> {title}</h3>
          <div className="card-content">
            {content.map((item) => (
              <item.component key={item.key} style={item.style} {...item.props}>
                {item.label} {item?.icon}
              </item.component>
            ))}
          </div>

          <div className="card-content">
            {content.map((item) => (
              <item.component
                key={item.key}
                style={item.style}
                {...item.props}
                $shape="round-sm"
              >
                {item.label} {item?.icon}
              </item.component>
            ))}
          </div>

          <div className="card-content">
            {content.map((item) => (
              <item.component
                key={item.key}
                style={item.style}
                {...item.props}
                $shape="round"
              >
                {item.label} {item?.icon}
              </item.component>
            ))}
          </div>

          <div className="card-content">
            {content.map((item) => (
              <item.component
                key={item.key}
                style={item.style}
                {...item.props}
                $shape="pill"
              >
                {item.label} {item?.icon}
              </item.component>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="card-container">
      <div className="card ">
        <h3> {title}</h3>
        <div className="card-content">
          {content.map((item) => (
            <item.component key={item.key} style={item.style} {...item.props}>
              {item.label} {item?.icon}
            </item.component>
          ))}
        </div>
        <div className="card-content">
          {content.map((item) => (
            <item.component
              key={item.key}
              style={item.style}
              {...item.props}
              $outline
            >
              {item.label} {item?.icon}
            </item.component>
          ))}
        </div>

        <div className="card-content">
          {content.map((item) => (
            <item.component
              key={item.key}
              style={item.style}
              {...item.props}
              $shape="round-sm"
            >
              {item.label} {item?.icon}
            </item.component>
          ))}
        </div>
        <div className="card-content">
          {content.map((item) => (
            <item.component
              key={item.key}
              style={item.style}
              {...item.props}
              $shape="round-sm"
              $outline
            >
              {item.label} {item?.icon}
            </item.component>
          ))}
        </div>
        <div className="card-content">
          {content.map((item) => (
            <item.component
              key={item.key}
              style={item.style}
              {...item.props}
              $shape="round"
            >
              {item.label} {item?.icon}
            </item.component>
          ))}
        </div>
        <div className="card-content">
          {content.map((item) => (
            <item.component
              key={item.key}
              style={item.style}
              {...item.props}
              $shape="round"
              $outline
            >
              {item.label} {item?.icon}
            </item.component>
          ))}
        </div>
        <div className="card-content">
          {content.map((item) => (
            <item.component
              key={item.key}
              style={item.style}
              {...item.props}
              $shape="pill"
            >
              {item.label} {item?.icon}
            </item.component>
          ))}
        </div>
        <div className="card-content">
          {content.map((item) => (
            <item.component
              key={item.key}
              style={item.style}
              {...item.props}
              $shape="pill"
              $outline
            >
              {item.label} {item?.icon}
            </item.component>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
