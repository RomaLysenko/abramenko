/**
 * @file
 * Provides global functions for site
 *
 */
(function ($, Drupal) {
    Drupal.behaviors.activeLink = {
        attach:function (context) {
            $('.view-filters').find('.bef-exposed-form').find('label').each(function () {
                if($(this).find('input').is(":checked")){
                    $(this).addClass('active-filter');
                }
            })
        }
    }
})(jQuery, Drupal);
