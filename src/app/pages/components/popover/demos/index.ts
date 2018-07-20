import { DemoPopoverStandardComponent } from './standard/standard';

export const POPOVER_DEMO_COMPONENTS: any[] = [DemoPopoverStandardComponent];

export const POPOVER_DEMOS: DEMOS = {
  standard: {
    ts: require('!!raw-loader?lang=typescript!./standard/standard.ts'),
    html: require('!!raw-loader?lang=markup!./standard/standard.html'),
  },
};
