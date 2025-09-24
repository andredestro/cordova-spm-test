// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "com.outsystems.plugins.inappbrowser",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "com.outsystems.plugins.inappbrowser",
            targets: ["InAppBrowserPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/apache/cordova-ios.git", branch: "master"),
        .package(url: "https://github.com/OutSystems/OSInAppBrowserLib-iOS.git", exact: "2.2.1")
    ],
    targets: [
        .target(
            name: "InAppBrowserPlugin",
            dependencies: [
                .product(name: "Cordova", package: "cordova-ios"),
                .product(name: "OSInAppBrowserLib", package: "OSInAppBrowserLib-iOS")
            ],
            path: "src/ios")
    ]
)
