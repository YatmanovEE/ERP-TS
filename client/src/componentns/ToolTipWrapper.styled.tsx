import { createUseStyles } from 'react-jss';
export namespace ToolTipWrapperStyled {
	export const Style = createUseStyles(
		{
			payloadContainer: ({ posChildren }: Props) => ({
				position: 'absolute',
				top: `${posChildren.y}px`,
				left: `${posChildren.x}px`,
			}),
			wrapper: ({ posParent }: Props) => ({
				position: 'absolute',
				top: `${posParent.y}px`,
				left: `${posParent.x}px`,
			}),
			container: ({ duration }: Props) => ({
				position: 'fixed',
				top: '0px',
				left: '0px',
				width: '100%',
				height: '100%',
				backgroundColor: 'transparent',
				opacity: 0,
				'&-enter': {
					opacity: 0,
				},
				'&-enter-active': {
					opacity: 1,
					transition: `opacity ${duration}ms`,
				},
				'&-enter-done': {
					opacity: 1,
				},
				'&-exit': {
					opacity: 1,
				},
				'&-exit-active': {
					opacity: 0,
					transition: `opacity ${duration}ms`,
				},
			}),
		},
		{
			name: 'ToolTipWrapper',
		}
	);
	export interface IPosStyle {
		readonly x: number | undefined;
		readonly y: number | undefined;
	}

	export interface Props {
		posChildren: IPosStyle;
		posParent: IPosStyle;
		duration: number;
	}
}
