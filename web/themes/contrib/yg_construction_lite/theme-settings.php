<?php

/**
 * @file
 * Provides an additional config form for theme settings.
 */

use Drupal\Core\Form\FormStateInterface;

function yg_construction_lite_form_system_theme_settings_alter(array &$form, FormStateInterface $form_state) {
  $form['visibility'] = [
    '#type' => 'vertical_tabs',
    '#title' => t('YG Concept Settings'),
    '#weight' => -999,
  ];

  $form['social']= [
    '#type' => 'details',
    '#title' => t('Social Links'),
    '#weight' => 0,
    '#group' => 'visibility',
    '#open' => FALSE,
  ];
#social links    
  $form['social']['social_links'] = [
    '#type' => 'details',
    '#title' => t('Social Links'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  ];
  $form['social']['social_links']['social_title'] = [
    '#type' => 'textfield',
    '#title' => t('Tilte'),
    '#description' => t('Please enter your social title'),
    '#default_value' => theme_get_setting('social_title'),
  ];
  $form['social']['social_links']['facebook_url'] = [
    '#type' => 'textfield',
    '#title' => t('Facebook'),
    '#description' => t('Please enter your facebook url'),
    '#default_value' => theme_get_setting('facebook_url'),
  ];
  $form['social']['social_links']['twitter_url'] = [
    '#type' => 'textfield',
    '#title' => t('Twitter'),
    '#description' => t('Please enter your twitter url'),
    '#default_value' => theme_get_setting('twitter_url'),
  ]; 
  $form['social']['social_links']['linkedin_url'] = [
    '#type' => 'textfield',
    '#title' => t('Linkedin url'),
    '#description' => t('Please enter your linkedin url'),
    '#default_value' => theme_get_setting('linkedin_url'),
  ];
  $form['social']['social_links']['youtube_url'] = [
    '#type' => 'textfield',
    '#title' => t('Youtube'),
    '#description' => t('Please enter your youtube url'),
    '#default_value' => theme_get_setting('youtube_url'),
  ];
  $form['social']['social_links']['google_plus_url'] = [
    '#type' => 'textfield',
    '#title' => t('Google Plus'),
    '#description' => t('Please enter your google plus url'),
    '#default_value' => theme_get_setting('google_plus_url'),
  ];
// banner-image
  $form['banner'] = [
    '#type' => 'details',
    '#title' => t('Background Image '),
    '#weight' => 1,
    '#group' => 'visibility',
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  ];
  $form['banner']['bg-image'] = [
    '#type' => 'managed_file',
    '#title'    => t('Background Image'),
    '#default_value' => theme_get_setting('bg-image'),
    '#upload_location' => 'public://',
    '#description' => t('Choose your background image for 404,403 pages'),
  ];

  // About-us
  $form['footer']= [
    '#type' => 'details',
    '#title' => t('Footer'),
    '#weight' => 2,
    '#group' => 'visibility',
    '#open' => FALSE,
  ];
  $form['footer']['about_us'] = [
    '#type' => 'details',
    '#title' => t('About Us'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  ];
  $form['footer']['about_us']['about_us_title'] = [
    '#type' => 'textfield',
    '#title' => t('About Us Title'),
    '#description' => t('Please enter about-us title'),
    '#default_value' => theme_get_setting('about_us_title'),
  ];
  $form['footer']['about_us']['about_desc'] = [
    '#type' => 'textarea',
    '#title' => t('About Description'),
    '#description' => t('Please enter footer about-description'),
    '#default_value' => theme_get_setting('about_desc'),
  ];

  // Contact-us
  $form['footer']['contact_us'] = [
    '#type' => 'details',
    '#title' => t('Contact Us'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  ];
  $form['footer']['contact_us']['title'] = [
    '#type' => 'textfield',
    '#title' => t('Title'),
    '#description' => t('Please enter contact-us title'),
    '#default_value' => theme_get_setting('title'),
  ];
  $form['footer']['contact_us']['info_desc'] = [
    '#type' => 'textarea',
    '#title' => t('Info Description'),
    '#description' => t('Please enter footer info-description'),
    '#default_value' => theme_get_setting('info_desc'),
  ];
  $form['footer']['contact_us']['contact_number'] = [
    '#type' => 'textfield',
    '#title' => t('Contact Number'),
    '#description' => t('Please enter contact-number'),
    '#default_value' => theme_get_setting('contact_number'),
  ];
  $form['footer']['contact_us']['mail'] = [
    '#type' => 'textfield',
    '#title' => t('Email Id'),
    '#description' => t('Please enter contact mail-id'),
    '#default_value' => theme_get_setting('mail'),
  ];
  $form['footer']['contact_us']['working_hours'] = [
    '#type' => 'textfield',
    '#title' => t('Working Hourse'),
    '#description' => t('Please enter working hours'),
    '#default_value' => theme_get_setting('working_hours'),
  ];
    $form['#submit'][] = 'yg_construction_lite_form_submit';
}
 

function yg_construction_lite_form_submit(&$form, $form_state) {
  $fid = $form_state->getValue('bg-image');
  if (array_key_exists(0,$fid)){
    $file = file_load($fid[0]);
    if (!empty($file)) {
      $file->setPermanent();
      $file->save();
      $file_usage = \Drupal::service('file.usage');
      $file_usage->add($file, 'yg_construction_lite', 'themes', 1);
    }
  }
}