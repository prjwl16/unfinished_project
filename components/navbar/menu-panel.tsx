import Link from "next/link";
import { ChevronRight, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { ElementType } from "react";

interface FeatureBase {
  title?: string | undefined;
  description?: string;
  url: string;
  image?: string;
}

interface FeatureWithIcon extends FeatureBase {
  icon: ElementType;
}

interface Features<T extends FeatureBase> {
  title?: string | undefined;
  features: T[];
}

interface MenuPanelProps {
  primaryFeatures: Features<FeatureWithIcon>[];
  secondaryFeatures?: Features<FeatureWithIcon>[];
  secondaryCards?: Features<FeatureBase>;
  showExploreLink?: boolean;
}

const SectionTitle: React.FC<{
  title: string | undefined;
  isFirst?: boolean;
}> = ({ title, isFirst }) => (
  <h2
    className={cn("text-xs text-neutral font-semibold mb-4", isFirst && "mb-8")}
  >
    {title}
  </h2>
);

const SectionContent: React.FC<{
  features: (FeatureBase | FeatureWithIcon)[];
  isIcon?: boolean;
}> = ({ features, isIcon = true }) => (
  <div className="space-y-6">
    {features.map((feature, index) => {
      const { title, description } = feature;
      const Icon = "icon" in feature ? feature.icon : null;
      return (
        <Link
          href={feature.url}
          key={index}
          className="flex items-start space-x-4 group"
        >
          {isIcon && Icon && (
            <div className="flex items-center text-primary-accent p-1.5 h-8 w-8 border border-surface-overlay group-hover:border-primary-accent rounded-lg">
              <Icon size={20} />
            </div>
          )}
          <div>
            <h3 className="text-sm flex items-center">
              {title}
              <ChevronRight size={14} className="hidden group-hover:flex" />
            </h3>
            <p className="text-xs text-neutral group-hover:text-white">
              {description}
            </p>
          </div>
        </Link>
      );
    })}
  </div>
);

const MenuPanel: React.FC<MenuPanelProps> = ({
  primaryFeatures,
  secondaryFeatures,
  secondaryCards,
  showExploreLink = false,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-11 gap-6 max-w-xl text-neutral-astronaut rounded-lg">
      <div className="col-span-6">
        {primaryFeatures.map((primaryFeature, index) => (
          <div key={index} className="p-4.5 pr-0">
            <SectionTitle title={primaryFeature.title} isFirst={!index} />
            <SectionContent features={primaryFeature.features} isIcon />
            {showExploreLink && (
              <div className="mt-8">
                <Link
                  href="#"
                  className="text-sm flex items-center text-link hover:underline"
                >
                  Explore all features <ChevronRight size={14} />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {secondaryFeatures && (
        <div className="col-span-5 bg-tertiary-accent">
          {secondaryFeatures.map((secondaryFeature, index) => (
            <div key={index} className="pl-4.5 pt-4.5">
              <SectionTitle title={secondaryFeature.title} isFirst />
              <SectionContent
                features={secondaryFeature.features}
                isIcon={true}
              />
            </div>
          ))}
        </div>
      )}

      {secondaryCards && (
        <div className="col-span-5 h-full bg-tertiary-accent p-4.5">
          <SectionTitle title={secondaryCards.title} />
          <Link href={"#"} className="grid grid-rows-3 gap-4 mt-5">
            {secondaryCards.features.map((secondaryCard, index) => (
              <div
                key={index}
                className="p-4 pr-0 border border-surface-overlay rounded-lg"
              >
                <h3 className="text-xs text-white mb-4">
                  {secondaryCard.title}
                </h3>
                <div className="flex items-end justify-between pr-4">
                  <p className="text-xs mt-4 text-neutral max-w-36">
                    {secondaryCard.description}
                  </p>
                  <MoveRight
                    size={16}
                    className="text-white hover:text-primary-accent"
                  />
                </div>
              </div>
            ))}
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuPanel;
