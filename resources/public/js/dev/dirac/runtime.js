// Compiled by ClojureScript 1.10.339 {}
goog.provide('dirac.runtime');
goog.require('cljs.core');
goog.require('dirac.project');
goog.require('dirac.runtime.core');
goog.require('dirac.runtime.prefs');
goog.require('dirac.runtime.tag');
dirac.runtime.get_version = dirac.project.get_current_version;
goog.exportSymbol('dirac.runtime.get_version', dirac.runtime.get_version);
dirac.runtime.available_QMARK_ = dirac.runtime.core.available_QMARK_;
goog.exportSymbol('dirac.runtime.available_QMARK_', dirac.runtime.available_QMARK_);
dirac.runtime.installed_QMARK_ = dirac.runtime.core.installed_QMARK_;
goog.exportSymbol('dirac.runtime.installed_QMARK_', dirac.runtime.installed_QMARK_);
dirac.runtime.install_BANG_ = dirac.runtime.core.install_BANG_;
goog.exportSymbol('dirac.runtime.install_BANG_', dirac.runtime.install_BANG_);
dirac.runtime.uninstall_BANG_ = dirac.runtime.core.uninstall_BANG_;
goog.exportSymbol('dirac.runtime.uninstall_BANG_', dirac.runtime.uninstall_BANG_);
dirac.runtime.get_tag = dirac.runtime.tag.get_tag;
goog.exportSymbol('dirac.runtime.get_tag', dirac.runtime.get_tag);
dirac.runtime.get_prefs = dirac.runtime.prefs.get_prefs;
goog.exportSymbol('dirac.runtime.get_prefs', dirac.runtime.get_prefs);
dirac.runtime.get_pref = dirac.runtime.prefs.pref;
goog.exportSymbol('dirac.runtime.get_pref', dirac.runtime.get_pref);
dirac.runtime.set_prefs_BANG_ = dirac.runtime.prefs.set_prefs_BANG_;
goog.exportSymbol('dirac.runtime.set_prefs_BANG_', dirac.runtime.set_prefs_BANG_);
dirac.runtime.set_pref_BANG_ = dirac.runtime.prefs.set_pref_BANG_;
goog.exportSymbol('dirac.runtime.set_pref_BANG_', dirac.runtime.set_pref_BANG_);

//# sourceMappingURL=runtime.js.map?rel=1563552903413
