// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react'
import { Link } from 'gatsby'

// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page'
import ComponentCode from '../../commons/component-code'
import H1 from '@govtnz/ds/build/react-ts/H1'
import H2 from '@govtnz/ds/build/react-ts/H2'
import H3 from '@govtnz/ds/build/react-ts/H3'
import H4 from '@govtnz/ds/build/react-ts/H4'
import H5 from '@govtnz/ds/build/react-ts/H5'
import H6 from '@govtnz/ds/build/react-ts/H6'

// This value is dynamically replaced in prebuild.js.
export const allTemplateIds: any = '{{allTemplateIds}}'

// @pageContentComponent

export default function Code() {
  return <ComponentPage menuIds={allTemplateIds} PageContent={PageContent} />
}
