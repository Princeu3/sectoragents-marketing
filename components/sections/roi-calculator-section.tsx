"use client";

import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatNumber } from "@/lib/utils";

const industryPresets = {
  manufacturing: {
    processes: 15,
    hoursPerProcess: 20,
    hourlyRate: 45,
  },
  retail: {
    processes: 25,
    hoursPerProcess: 10,
    hourlyRate: 35,
  },
};

export function ROICalculatorSection() {
  const [processes, setProcesses] = useState(15);
  const [hoursPerProcess, setHoursPerProcess] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(45);
  const prefersReducedMotion = useReducedMotion();

  const applyPreset = (industry: "manufacturing" | "retail") => {
    const preset = industryPresets[industry];
    setProcesses(preset.processes);
    setHoursPerProcess(preset.hoursPerProcess);
    setHourlyRate(preset.hourlyRate);
  };

  const results = useMemo(() => {
    const currentAnnualHours = processes * hoursPerProcess * 12;
    const automationSavings = 0.5; // 50% reduction
    const savedHours = currentAnnualHours * automationSavings;
    const annualSavings = savedHours * hourlyRate;
    const monthlyPlatformCost = 500 + processes * 0.1 * 100; // Base + execution costs
    const annualPlatformCost = monthlyPlatformCost * 12;
    const netSavings = annualSavings - annualPlatformCost;
    const monthsToROI = annualPlatformCost / (annualSavings / 12);
    const threeYearSavings = netSavings * 3;

    return {
      savedHours: Math.round(savedHours),
      annualSavings: Math.round(annualSavings),
      netSavings: Math.round(netSavings),
      monthsToROI: Math.round(monthsToROI * 10) / 10,
      threeYearSavings: Math.round(threeYearSavings),
    };
  }, [processes, hoursPerProcess, hourlyRate]);

  return (
    <SectionWrapper id="roi-calculator">
      <Container size="md">
        <SectionHeading
          title="Calculate Your ROI"
          subtitle="See how much time and money you could save with SectorAgents automation."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Calculator Inputs */}
          <Card className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900">
                Your Current State
              </h3>
            </div>

            {/* Industry Presets */}
            <div className="mb-6">
              <p className="text-sm text-secondary-600 mb-3">Quick start with industry presets:</p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => applyPreset("manufacturing")}
                >
                  Manufacturing
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => applyPreset("retail")}
                >
                  Retail
                </Button>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-secondary-700">
                    Processes to automate
                  </label>
                  <span className="text-sm font-semibold text-primary-600">
                    {processes}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={processes}
                  onChange={(e) => setProcesses(Number(e.target.value))}
                  className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div className="flex justify-between text-xs text-secondary-400 mt-1">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-secondary-700">
                    Hours per process (monthly)
                  </label>
                  <span className="text-sm font-semibold text-primary-600">
                    {hoursPerProcess}h
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerProcess}
                  onChange={(e) => setHoursPerProcess(Number(e.target.value))}
                  className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div className="flex justify-between text-xs text-secondary-400 mt-1">
                  <span>1h</span>
                  <span>40h</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-secondary-700">
                    Average hourly labor cost
                  </label>
                  <span className="text-sm font-semibold text-primary-600">
                    ${hourlyRate}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="100"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div className="flex justify-between text-xs text-secondary-400 mt-1">
                  <span>$15</span>
                  <span>$100</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Results */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 lg:p-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">Your Projected Savings</h3>
              </div>

              <div className="space-y-6">
                {/* Primary Metric */}
                <div className="text-center p-6 bg-white/10 rounded-xl">
                  <p className="text-primary-100 text-sm mb-2">Annual Net Savings</p>
                  <p className="text-4xl lg:text-5xl font-bold">
                    {formatCurrency(results.netSavings)}
                  </p>
                </div>

                {/* Secondary Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-xl text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-primary-200" />
                      <p className="text-primary-100 text-xs">Hours Saved</p>
                    </div>
                    <p className="text-2xl font-bold">
                      {formatNumber(results.savedHours)}
                    </p>
                    <p className="text-primary-200 text-xs">per year</p>
                  </div>

                  <div className="p-4 bg-white/10 rounded-xl text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-primary-200" />
                      <p className="text-primary-100 text-xs">ROI Timeline</p>
                    </div>
                    <p className="text-2xl font-bold">{results.monthsToROI}</p>
                    <p className="text-primary-200 text-xs">months to ROI</p>
                  </div>
                </div>

                {/* 3-Year Projection */}
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-primary-100 text-sm">3-Year Projected Savings</p>
                    <p className="text-xl font-bold">
                      {formatCurrency(results.threeYearSavings)}
                    </p>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  className="w-full bg-white text-primary-700 hover:bg-primary-50"
                >
                  Get Detailed Analysis
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
