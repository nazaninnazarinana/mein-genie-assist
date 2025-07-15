
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, ArrowRight, Mic, Phone, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ModuleCards = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('modules.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
            {t('modules.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formino Module */}
          <Card className="relative overflow-hidden border-2 border-white/20 hover:border-green-400/50 transition-all duration-300 group bg-black/40 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-green-400/20 rounded-lg border border-green-400/30">
                  <FileText className="h-8 w-8 text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                    {t('modules.formino.title')}
                  </CardTitle>
                  <CardDescription className="text-base text-white/80 font-medium">
                    {t('modules.formino.subtitle')}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-white/90 leading-relaxed font-medium">
                {t('modules.formino.description')}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mic className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-white/90 font-medium">{t('modules.formino.feature1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-white/90 font-medium">{t('modules.formino.feature2')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-white/90 font-medium">{t('modules.formino.feature3')}</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl" asChild>
                  <Link to="/formino">
                    {t('modules.formino.button')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Termino Module */}
          <Card className="relative overflow-hidden border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-300 group bg-black/40 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-cyan-400/20 rounded-lg border border-cyan-400/30">
                  <Calendar className="h-8 w-8 text-cyan-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                    {t('modules.termino.title')}
                  </CardTitle>
                  <CardDescription className="text-base text-white/80 font-medium">
                    {t('modules.termino.subtitle')}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-white/90 leading-relaxed font-medium">
                {t('modules.termino.description')}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm text-white/90 font-medium">{t('modules.termino.feature1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm text-white/90 font-medium">{t('modules.termino.feature2')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm text-white/90 font-medium">{t('modules.termino.feature3')}</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl" asChild>
                  <Link to="/termino">
                    {t('modules.termino.button')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModuleCards;
