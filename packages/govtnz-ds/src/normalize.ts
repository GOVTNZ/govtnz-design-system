import { CSSVariablePattern } from '@springload/metatemplate';
import { camelCase } from 'lodash';

export const normalize = async ({ id, html, css }) => {
  return {
    id: toId(id),
    html,
    css,
    cssVariables
  };
};

export const toId = (id: string): string => {
  // Normalise component id to be PascalCase
  return id.substring(0, 1).toUpperCase() + camelCase(id.substring(1));
};

const cssVariables: CSSVariablePattern[] = [
  {
    id: 'g-theme-font-family',
    valueSubstringMatch: 'Arial, sans-serif'
  },
  { id: 'g-theme-background-color', valueSubstringMatch: '#ffffff' },
  {
    id: 'g-theme-color',
    valueSubstringMatch: '#2a2a2a'
  },
  {
    id: 'g-theme-print-color',
    valueSubstringMatch: '#000000'
  },
  {
    id: 'g-theme-error-color',
    valueSubstringMatch: '#b10e1e'
  },
  {
    id: 'g-theme-hint-color',
    valueSubstringMatch: '#595959'
  },
  {
    id: 'g-theme-focus-ring-color', // focus
    valueSubstringMatch: '#b53cde'
  },
  {
    id: 'g-theme-heading-color', // also textarea borders and skip link foreground focus
    valueSubstringMatch: '#ff0000'
  },

  {
    id: 'g-theme-inverted-color',
    valueSubstringMatch: '#ffffff'
  },
  {
    id: 'g-theme-inverted-background-color',
    valueSubstringMatch: '#363636'
  },
  {
    id: 'g-theme-inverted-link-color',
    valueSubstringMatch: '#d2d2d2',
    defaultValue: '#d3d3d3'
  },
  {
    id: 'g-theme-inverted-nav-active-color',
    valueSubstringMatch: '#24a882'
  },

  {
    id: 'g-theme-button-active-box-shadow',
    valueSubstringMatch: '#003418'
  },

  {
    id: 'g-theme-button-background-color',
    valueSubstringMatch: '#00823b'
  },
  {
    id: 'g-theme-button-hover-background-color',
    valueSubstringMatch: '#00692f'
  },
  {
    id: 'g-theme-button-disabled-background-color',
    valueSubstringMatch: '#078766'
  },
  {
    id: 'g-theme-button-secondary-background-color',
    valueSubstringMatch: '#b2b2b2'
  },
  {
    id: 'g-theme-button-warning-background-color',
    valueSubstringMatch: '#900815'
  },

  { id: 'g-theme-link-color', valueSubstringMatch: '#005ea5' },
  { id: 'g-theme-link-focus-color', valueSubstringMatch: '#0b0c0c' },
  { id: 'g-theme-link-hover-color', valueSubstringMatch: '#2b8cc4' },
  { id: 'g-theme-link-visited-color', valueSubstringMatch: '#4c2c92' },
  { id: 'g-theme-link-muted-color', valueSubstringMatch: '#6f777b' },

  { id: 'g-theme-alert-color', valueSubstringMatch: '#6f777b' },

  {
    id: 'g-theme-alert-background-color',
    valueSubstringMatch: '#f4f4f4'
  },
  { id: 'g-theme-alert-success-border-color', valueSubstringMatch: '#088a20' },
  { id: 'g-theme-alert-warning-border-color', valueSubstringMatch: '#d47500' },
  { id: 'g-theme-alert-error-border-color', valueSubstringMatch: '#b10e1e' },
  { id: 'g-theme-alert-info-border-color', valueSubstringMatch: '#1f1bfb' },
  { id: 'g-theme-alert-border-color', valueSubstringMatch: '#d3d3d3' },

  { id: 'g-theme-inset-border-color', valueSubstringMatch: '#23cba5' },

  { id: 'g-theme-caption-color', valueSubstringMatch: '#6f777c' }
].map(item => ({
  ...item,
  defaultValue: item.defaultValue || item.valueSubstringMatch
}));

export const isColourMatch = (colour: string): boolean => {
  return cssVariables.some(item => item.valueSubstringMatch === colour);
};
