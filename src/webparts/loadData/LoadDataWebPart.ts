import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'LoadDataWebPartStrings';
import LoadData from './components/LoadData';
import { ILoadDataProps } from './components/ILoadDataProps';

export interface ILoadDataWebPartProps {
  description: string;
  listTitle: string;
}

export default class LoadDataWebPart extends BaseClientSideWebPart<ILoadDataWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ILoadDataProps > = React.createElement(
      LoadData,
      {
        description: this.properties.description,
        listTitle: this.properties.listTitle
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('listTitle', {
                  label: strings.ListTitleLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
