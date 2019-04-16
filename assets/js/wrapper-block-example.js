/**
 * BLOCK: wrapper-block-example/background
 */

import classNames from 'classnames';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	Fragment, // Used to wrap our edit component and only have one root element
} = wp.element;
const {
	InnerBlocks, // Allows it to place child blocks inside our block
	InspectorControls, // We place our select control inside the inspector contorls which show up on the right of the editor
} = wp.editor;
const {
	PanelBody, // A panel where we place our select control in (creates a colapsable element)
	SelectControl, // Our select control to choose the background color
} = wp.components;

registerBlockType( 'wrapper-block-example/wrapper-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Background', 'wrapper-block-example' ), // Block title.
	icon: 'editor-table', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Background', 'wrapper-block-example' ),
		__( 'Wrapper Block', 'wrapper-block-example' ),
	],

	attributes: {
		// Register bgColor attribute to save the chosen color
		bgColor: {
			type: 'string',
		},
	},

	edit( { attributes, setAttributes, className } ) {
		const {
			bgColor = '',
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Background Color', 'wrapper-block-example' ) }
						initialOpen={ true }
					>
						<SelectControl
							label={ __( 'Background Color', 'wrapper-block-example' ) }
							value={ bgColor }
							options={ [
								{
									value: '',
									label: __( 'No Background Color', 'wrapper-block-example' ),
								},
								{
									value: 'paleturquoise',
									label: __( 'Light Blue', 'wrapper-block-example' ),
								},
								{
									value: 'orange',
									label: __( 'Orange', 'wrapper-block-example' ),
								},
							] }
							onChange={ ( selectedOption ) => setAttributes( { bgColor: selectedOption } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<div
					className={ className }
					style={ { backgroundColor: bgColor } }
				>
					<InnerBlocks />
				</div>
			</Fragment>
		);
	},

	save( { attributes, className } ) {
		const {
			bgColor = '',
		} = attributes;

		let styles = {};
		let classes = className;

		// Only set attributes when background color is chosen
		if ( '' !== bgColor ) {
			styles = { backgroundColor: bgColor, padding: '10px' };
			classes = classNames( `bg-${ bgColor }`, classes );
		}

		return (
			<div
				className={ classes }
				style={ styles }
			>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
