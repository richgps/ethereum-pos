import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import TrustSetting from './TrustSetting';

storiesOf('TrustSetting')

	.addDecorator((story, context) => withInfo(TrustSetting.description)(story)(context))

	.add('base', () => (
		<TrustSetting onChange={action('onChange')} />
	));
