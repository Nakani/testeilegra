//
//  NativeFunctions.m
//  App
//
//  Created by diogoguedes on 25/11/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "NativeFunctions.h"
#import <React/RCTLog.h>


@implementation NativeFunctions

RCT_EXPORT_MODULE();

+ (instancetype)sharedInstance
{
  static NativeFunctions *sharedInstance = nil;
  
  @synchronized(self) {
    if (!sharedInstance) {
      sharedInstance = [[NativeFunctions alloc] init];
    }
  }
  
  return sharedInstance;
}

RCT_EXPORT_METHOD(userDismissedOnboarding)
{
  [[NSUserDefaults standardUserDefaults] setObject:@NO forKey:@"isFirstAccess"];
}

RCT_EXPORT_METHOD(openThirdPartyApps:(NSString *)document callback:(RCTResponseSenderBlock)callback)
{
  NSString *urlString = [NSString stringWithFormat:@"creditoreal://com.umov.me.MAIN?workspace=creditoreal&user="];
  urlString = [urlString stringByAppendingString:document];
  
  NSURL *url = [NSURL URLWithString:urlString];
  
  if ([[UIApplication sharedApplication] canOpenURL:url]) {
    callback(@[@(true)]);
    [[UIApplication sharedApplication] openURL:url options:@{} completionHandler:nil];
  } else {
    callback(@[@(false)]);
  }
}

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
