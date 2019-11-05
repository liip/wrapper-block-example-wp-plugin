<?php
/**
 * Plugin Name: Wrapper Block Example
 * Description: Example how to create a wrapper block for Gutenberg in WordPress.
 * Author: Liip AG
 * Author URI: https://liip.ch
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: wrapper-block-example
 * Domain Path: /languages/
 *
 * @package wrapper-block-example
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action( 'enqueue_block_editor_assets', 'wrapper_block_example_enqueue_block_editor_assets' );

function wrapper_block_example_enqueue_block_editor_assets() {
    // Enqueue our script
    wp_enqueue_script(
        'wrapper-block-example-js',
        esc_url( plugins_url( '/dist/wrapper-block-example.js', __FILE__ ) ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components' ),
        '1.0.0',
        true // Enqueue the script in the footer.
    );
}
